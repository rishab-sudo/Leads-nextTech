<?php

/* =========================================================
   CONTACT FORM - LEADNXT
   Sends enquiries to:
   rishabdutt4@gmail.com
========================================================= */


/* =========================================================
   CORS / HEADERS
========================================================= */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");


/* =========================================================
   HANDLE PREFLIGHT REQUEST
========================================================= */

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}


/* =========================================================
   ONLY POST REQUEST ALLOWED
========================================================= */

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);

    exit;
}


/* =========================================================
   READ JSON DATA
========================================================= */

$rawData = file_get_contents("php://input");

$data = json_decode($rawData, true);

if (!is_array($data)) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Invalid form data."
    ]);

    exit;
}


/* =========================================================
   GET FORM VALUES
========================================================= */

$fullName = trim($data["fullName"] ?? "");
$email    = trim($data["email"] ?? "");
$mobile   = trim($data["mobile"] ?? "");
$query    = trim($data["query"] ?? "");


/* =========================================================
   SERVER-SIDE VALIDATION
========================================================= */


/* Full Name */

if ($fullName === "") {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Full name is required."
    ]);

    exit;
}

if (!preg_match("/^[a-zA-Z\s.'-]{2,60}$/", $fullName)) {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid full name."
    ]);

    exit;
}


/* Email */

if ($email === "") {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Email address is required."
    ]);

    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;
}


/* Mobile */

if ($mobile === "") {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Mobile number is required."
    ]);

    exit;
}

if (!preg_match("/^[6-9][0-9]{9}$/", $mobile)) {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid 10-digit mobile number."
    ]);

    exit;
}


/* Query */

if ($query === "") {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Query is required."
    ]);

    exit;
}

if (strlen($query) < 10) {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Query should contain at least 10 characters."
    ]);

    exit;
}

if (strlen($query) > 1000) {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Query cannot exceed 1000 characters."
    ]);

    exit;
}


/* =========================================================
   SANITIZE DATA
========================================================= */

$fullName = htmlspecialchars(
    $fullName,
    ENT_QUOTES,
    "UTF-8"
);

$email = filter_var(
    $email,
    FILTER_SANITIZE_EMAIL
);

$mobile = htmlspecialchars(
    $mobile,
    ENT_QUOTES,
    "UTF-8"
);

$query = htmlspecialchars(
    $query,
    ENT_QUOTES,
    "UTF-8"
);


/* =========================================================
   EMAIL SETTINGS
========================================================= */

$to = "rishabdutt4@gmail.com";

$subject = "New Contact Enquiry - LeadNXT";


/* =========================================================
   EMAIL BODY
========================================================= */

$message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
</head>

<body style='font-family: Arial, sans-serif; background:#f5f5f5; padding:30px;'>

    <div style='max-width:650px; margin:auto; background:#ffffff; padding:30px; border-radius:10px;'>

        <h2 style='margin-top:0; color:#111111;'>
            New Contact Enquiry
        </h2>

        <p style='color:#666666;'>
            A new enquiry has been submitted through the LeadNXT website.
        </p>

        <table style='width:100%; border-collapse:collapse; margin-top:25px;'>

            <tr>
                <td style='padding:12px; border:1px solid #eeeeee; font-weight:bold; width:35%;'>
                    Full Name
                </td>

                <td style='padding:12px; border:1px solid #eeeeee;'>
                    {$fullName}
                </td>
            </tr>

            <tr>
                <td style='padding:12px; border:1px solid #eeeeee; font-weight:bold;'>
                    Email
                </td>

                <td style='padding:12px; border:1px solid #eeeeee;'>
                    {$email}
                </td>
            </tr>

            <tr>
                <td style='padding:12px; border:1px solid #eeeeee; font-weight:bold;'>
                    Mobile Number
                </td>

                <td style='padding:12px; border:1px solid #eeeeee;'>
                    {$mobile}
                </td>
            </tr>

            <tr>
                <td style='padding:12px; border:1px solid #eeeeee; font-weight:bold; vertical-align:top;'>
                    Query
                </td>

                <td style='padding:12px; border:1px solid #eeeeee;'>
                    " . nl2br($query) . "
                </td>
            </tr>

        </table>

        <p style='margin-top:25px; color:#999999; font-size:12px;'>
            This email was generated automatically from the LeadNXT website contact form.
        </p>

    </div>

</body>
</html>
";


/* =========================================================
   EMAIL HEADERS
========================================================= */

$headers = [];

$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=UTF-8";

/*
 * IMPORTANT:
 * Use an email address belonging to your website domain
 * in production if your hosting requires it.
 */
$headers[] = "From: LeadNXT Website <noreply@yourdomain.com>";

/*
 * Visitor email will be available as Reply-To.
 * So when you click Reply, you can reply directly to visitor.
 */
$headers[] = "Reply-To: {$email}";

$headersString = implode("\r\n", $headers);


/* =========================================================
   SEND EMAIL
========================================================= */

$mailSent = mail(
    $to,
    $subject,
    $message,
    $headersString
);


/* =========================================================
   RESPONSE
========================================================= */

if ($mailSent) {

    http_response_code(200);

    echo json_encode([
        "success" => true,
        "message" => "Your query has been submitted successfully. We will get back to you soon."
    ]);

    exit;
}


/* =========================================================
   MAIL FAILED
========================================================= */

http_response_code(500);

echo json_encode([
    "success" => false,
    "message" => "Unable to send your query right now. Please try again later."
]);

exit;

?>

