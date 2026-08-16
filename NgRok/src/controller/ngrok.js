import 'dotenv/config';
import ngrok from 'ngrok'

async function startTunnel(port) {
  try {
    // Pehle koi purana tunnel/session hai to usay kill kar dein
    await ngrok.kill();

    const url = await ngrok.connect({
      addr: port,
      authtoken: process.env.NGROK_AUTHTOKEN,
    });
    console.log(`✅ Public URL: ${url}`);
    return url;
  } catch (error) {
    console.error('❌ ngrok tunnel start karne mein error:', error.message);
    throw error;
  }
}

export default startTunnel;