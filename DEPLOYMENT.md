# Deploying to DigitalOcean

This guide will help you deploy your Next.js application to DigitalOcean.

## Prerequisites

- A DigitalOcean account
- Git repository with your code
- Node.js and npm installed locally

## Option 1: Deploy to DigitalOcean App Platform (Recommended)

The App Platform is a Platform-as-a-Service (PaaS) offering that's perfect for Next.js applications.

### Steps:

1. **Push your code to a Git repository**
   - GitHub, GitLab, or Bitbucket

2. **Create a new App on DigitalOcean App Platform**
   - Go to the [DigitalOcean Cloud Control Panel](https://cloud.digitalocean.com/)
   - Click on "Apps" in the left sidebar
   - Click "Create App"
   - Select your Git repository and branch

3. **Configure your app**
   - Select "Next.js" as your framework
   - Set the following:
     - Build Command: `npm run build`
     - Run Command: `npm run start`
   - Configure environment variables if needed

4. **Choose your plan**
   - Select the Basic or Professional plan based on your needs

5. **Deploy your app**
   - Click "Launch App"

### Benefits:
- Automatic HTTPS
- Built-in CI/CD
- Horizontal scaling
- Zero downtime deployments

## Option 2: Deploy to a DigitalOcean Droplet

For more control over your server environment, you can use a Droplet (virtual machine).

### Steps:

1. **Create a Droplet**
   - Go to the [DigitalOcean Cloud Control Panel](https://cloud.digitalocean.com/)
   - Click "Create" and select "Droplets"
   - Choose Ubuntu as the operating system
   - Select your plan (at least 1GB RAM recommended)
   - Add your SSH key or create a password
   - Click "Create Droplet"

2. **Connect to your Droplet**
   ```bash
   ssh root@your-droplet-ip
   ```

3. **Install Node.js and npm**
   ```bash
   curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Install PM2 (Process Manager)**
   ```bash
   npm install -g pm2
   ```

5. **Clone your repository**
   ```bash
   git clone your-repository-url
   cd your-project-directory
   ```

6. **Install dependencies and build**
   ```bash
   npm install
   npm run build
   ```

7. **Start your application with PM2**
   ```bash
   pm2 start npm --name "nextjs" -- start
   pm2 startup
   pm2 save
   ```

8. **Set up Nginx as a reverse proxy**
   ```bash
   sudo apt-get install nginx
   ```

   Create a new Nginx configuration:
   ```bash
   sudo nano /etc/nginx/sites-available/nextjs
   ```

   Add the following configuration:
   ```
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable the configuration:
   ```bash
   sudo ln -s /etc/nginx/sites-available/nextjs /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Set up SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

## Maintenance and Updates

### Updating your application:

1. **Pull the latest changes**
   ```bash
   git pull origin main
   ```

2. **Install dependencies and rebuild**
   ```bash
   npm install
   npm run build
   ```

3. **Restart the application**
   - For App Platform: The platform will automatically rebuild and deploy
   - For Droplet: `pm2 restart nextjs`

## Monitoring and Logging

### App Platform:
- Use the built-in metrics and logs in the DigitalOcean dashboard

### Droplet:
- View logs with PM2: `pm2 logs nextjs`
- Monitor application: `pm2 monit`

## Additional Resources

- [DigitalOcean App Platform Documentation](https://docs.digitalocean.com/products/app-platform/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/) 