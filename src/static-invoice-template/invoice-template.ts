export class InvoiceTemplate {
  sampleEmailTemplate(): string {
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Test</title>
</head>
<body style="@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap'); font-family: 'Manrope', sans-serif; font-weight: 400; background-color: #F4F5F7; padding: 20px; font-size: 14px;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" align="center" style="max-width: 600px;">
        <thead>
            <tr>
                <th align="left" valign="middle" style="padding-bottom: 40px;"><img src="https://cellar-c2.services.clever-cloud.com/smiels-staticfiles/images/smiels-email-logo.png" alt="" width="128" height="48"></th>
                <th align="right" valign="middle" style="padding-bottom: 40px; font-size: 14px; font-weight: 400; color: #172B4D;">Simplify Business</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="padding: 40px; border-radius: 10px; text-align: left;">
                    <thead>
                        <tr>
                            <th style="text-transform: uppercase; color: #DFE1E6; font-size: 30px; font-weight: 200; padding-bottom: 40px;">Activate your account</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h1 style="color: #505F79; font-size: 24px; margin-bottom: 40px;">Hi Angelica!</h1>
                                <p style="color: #505F79; line-height: 20px;">Please confirm your email with Smiels to activate your account.</p>
                                <p style="color: #505F79; line-height: 20px;">Once your account will be activated, you can register your company to make it simplified.</p>
                                <a href="#" onMouseOver="this.style.background='#172B4D'" onMouseOut="this.style.background='#0052CC'" target="_blank" style="transition: 0.3s !important; padding: 10px 40px; color: #ffffff; background-color: #0052CC; box-shadow: -6px 6px 6px rgba(0, 82, 204, 0.1);
                                border-radius: 4px; font-size: 14px; text-decoration: none; margin-top: 40px; display: inline-block;">Activate Now</a>
                                <hr style="margin: 40px 0;" color="#F4F5F7">
                                <p style="color: #A5ADBA; font-size: 12px; line-height: 20px;">If you didn't request this, please ignore this email.</p>
                                <img src="https://cellar-c2.services.clever-cloud.com/smiels-staticfiles/images/smiels-signatures.png" width="185" height="45" alt="" style="margin-top: 20px; margin-bottom: 20px;">
                                <!--
                                <ul style="list-style: none; margin: 0 0 20px 0; padding: 0;">
                                    <li style="float: left; margin-right: 10px; transition: 0.3s !important;"><a href="#" target="_blank"><img src="twitter.png" alt=""></a></li>
                                    <li style="float: left; margin-right: 10px; transition: 0.3s !important;"><a href="#" target="_blank"><img src="LinkedIn.png" alt=""></a></li>
                                    <li style="float: left; transition: 0.3s !important;"><a href="#" target="_blank"><img src="facebook.png" alt=""></a></li>
                                </ul>
                                -->
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <a href="#" target="_blank" onMouseOver="this.style.background='#DFE1E6'" onMouseOut="this.style.background='#ffffff'" style="transition: 0.3s !important; border: 1px solid #DFE1E6; color: #A5ADBA; background-color: #ffffff;
                                border-radius: 4px; font-size: 12px; font-weight: 500; text-decoration: none; padding: 6px 20px; margin-top: 20px; margin-right: 10px; display: inline-block;">Unsubscribe</a>
                                <a href="#" target="_blank" onMouseOver="this.style.background='#DFE1E6'" onMouseOut="this.style.background='#ffffff'" style="transition: 0.3s !important; border: 1px solid #DFE1E6; color: #A5ADBA; background-color: #ffffff;
                                border-radius: 4px; font-size: 12px; font-weight: 500; text-decoration: none; padding: 6px 20px; margin-top: 20px; display: inline-block;">Contact Us</a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>`;
  }
}
