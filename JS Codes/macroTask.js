// Macro task using setTimeout()
setTimeout(() => {
    console.log('Inside setTimeout - Macro task');
  }, 0);
  
  // Micro task using Promise
  const microTaskPromise = new Promise((resolve, reject) => {
    console.log("HEre")
    resolve('Micro task completed');
  });
  
  microTaskPromise.then((result) => {
    console.log(result); // Executed as a micro task
  });
  
  console.log('This is a regular task'); // Executed first