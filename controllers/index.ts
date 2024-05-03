export async function loginController(req: any, res: any) {
    try {
      // Parse email from request body
      const { email } = req.body;
  
      // Log the email
      console.log('Received email:', email);
  
      // Respond with a success message
      res.status(200).json({ message: 'Email received successfully' });
    } catch (error) {
      // Handle errors
      console.error('Error in login controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  