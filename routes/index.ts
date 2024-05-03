import { Router } from 'bun';

const router = new Router();

router.post('/login', async (req, res) => {
  // Call the controller function to handle the login request
  await loginController(req, res);
});

export default router;
