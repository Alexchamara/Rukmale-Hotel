// Fix imports script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Process UI components directory
async function processDirectory(directory) {
  try {
    console.log(`Processing directory: ${directory}`);
    const files = await fs.promises.readdir(directory);
    
    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const filePath = path.join(directory, file);
        await processFile(filePath);
      }
    }
    console.log('All files processed successfully!');
  } catch (err) {
    console.error('Error processing directory:', err);
  }
}

// Process a single file
async function processFile(filePath) {
  try {
    console.log(`Processing file: ${path.basename(filePath)}`);
    const data = await fs.promises.readFile(filePath, 'utf8');
    
    // Remove version numbers from imports
    let updatedContent = data.replace(/@[^/\\]+\/react-[^@"']+@\d+\.\d+\.\d+/g, match => {
      return match.split('@').slice(0, -1).join('@');
    });

    // Fix lucide-react imports
    updatedContent = updatedContent.replace(/lucide-react@\d+\.\d+\.\d+/g, 'lucide-react');
    
    // Fix class-variance-authority imports
    updatedContent = updatedContent.replace(/class-variance-authority@\d+\.\d+\.\d+/g, 'class-variance-authority');
    
    // Fix other common packages
    updatedContent = updatedContent.replace(/cmdk@\d+\.\d+\.\d+/g, 'cmdk');
    updatedContent = updatedContent.replace(/embla-carousel-react@\d+\.\d+\.\d+/g, 'embla-carousel-react');
    updatedContent = updatedContent.replace(/input-otp@\d+\.\d+\.\d+/g, 'input-otp');
    updatedContent = updatedContent.replace(/next-themes@\d+\.\d+\.\d+/g, 'next-themes');
    updatedContent = updatedContent.replace(/react-hook-form@\d+\.\d+\.\d+/g, 'react-hook-form');
    updatedContent = updatedContent.replace(/react-resizable-panels@\d+\.\d+\.\d+/g, 'react-resizable-panels');
    updatedContent = updatedContent.replace(/recharts@\d+\.\d+\.\d+/g, 'recharts');
    updatedContent = updatedContent.replace(/sonner@\d+\.\d+\.\d+/g, 'sonner');
    updatedContent = updatedContent.replace(/vaul@\d+\.\d+\.\d+/g, 'vaul');

    // Write updated content back to file
    await fs.promises.writeFile(filePath, updatedContent, 'utf8');
    console.log(`Fixed imports in ${path.basename(filePath)}`);
  } catch (err) {
    console.error(`Error processing file ${path.basename(filePath)}:`, err);
  }
}

// Also check src/imports directory for SVG imports
async function processSrcDirectories() {
  // Process UI components
  await processDirectory(path.join(__dirname, 'src/components/ui'));
  
  // Process imports directory
  await processDirectory(path.join(__dirname, 'src/imports'));
  
  // Process other components
  await processDirectory(path.join(__dirname, 'src/components'));
  
  // Process assets
  await processDirectory(path.join(__dirname, 'src/assets'));
}

// Start processing
processSrcDirectories();