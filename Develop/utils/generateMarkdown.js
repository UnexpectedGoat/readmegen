// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title 
  ${data.title}

  ## Description
   ${data.description}

  ## Contents
  ${data.contents}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributed}

  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
