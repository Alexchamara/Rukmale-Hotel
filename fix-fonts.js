import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to replace font declarations in files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Don't modify files that are already using only Montserrat
    if (content.includes("font-family: 'Montserrat'") && !content.includes("font-family: 'Montserrat', sans-serif")) {
      console.log(`Skipping already updated file: ${filePath}`);
      return;
    }
    
    // Replace various font patterns but preserve Baskervville_SC
    const replacements = [
      // Replace 'Montserrat', sans-serif with just 'Montserrat'
      { from: /'Montserrat',\s*sans-serif/g, to: "'Montserrat'" },
      
      // Don't modify Baskervville_SC
      { 
        from: /font-family\s*:\s*['"]Baskervville_SC(?:[^'"]*)',\s*sans-serif/g, 
        to: (match) => match.replace(", sans-serif", "") 
      },

      // Replace any other font-family with Montserrat (except those with Baskervville_SC)
      { 
        from: /font-family\s*:\s*['"](?!Baskervville_SC)([^'"]*)',\s*sans-serif/g, 
        to: "font-family: 'Montserrat'" 
      },
      
      // Replace Tailwind font declarations for sans-serif
      {
        from: /font-\['([^']*)'\],\s*sans-serif/g, 
        to: (match, p1) => {
          // If it contains Baskervville_SC, preserve it but remove sans-serif
          if (p1.includes('Baskervville_SC')) {
            return match.replace(", sans-serif", "");
          }
          return "font-['Montserrat']";
        }
      },

      // Replace generic sans-serif with Montserrat
      { from: /font-family\s*:\s*sans-serif/g, to: "font-family: 'Montserrat'" },
      
      // Handle fontFamily in inline styles
      { 
        from: /fontFamily\s*:\s*['"](?!Baskervville_SC)([^'"]*)',\s*sans-serif['"]/g, 
        to: "fontFamily: 'Montserrat'" 
      },
      
      // Preserve Baskervville_SC in fontFamily but remove sans-serif
      { 
        from: /(fontFamily\s*:\s*['"]Baskervville_SC(?:[^'"]*)',\s*)sans-serif(['"]\s*)/g, 
        to: "$1$2" 
      }
    ];
    
    let modified = false;
    replacements.forEach(({ from, to }) => {
      const newContent = content.replace(from, to);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated file: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

// Function to walk directory and process files
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (
      fullPath.endsWith('.tsx') || 
      fullPath.endsWith('.jsx') ||
      fullPath.endsWith('.ts') ||
      fullPath.endsWith('.js') ||
      fullPath.endsWith('.css')
    ) {
      processFile(fullPath);
    }
  });
}

// Start processing from the src directory
const srcDir = path.join(__dirname, 'src');
console.log(`Processing files in ${srcDir}...`);
processDirectory(srcDir);
console.log('Font replacement completed.');