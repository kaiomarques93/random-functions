function likeMore(max, k) {
	const startTime = new Date().getTime(); 
	let likeButton = document.querySelector("#u-1919424827 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button")


  for (let i = 0; i < max; i++) {
    setTimeout(() => {
      try {
        likeButton.click();
        console.log(`${i} - liked person`);
      } catch (error) {
        console.log('Error:', error);
      }
	 // Clear the console every 20 times
      if ((i + 1) % 20 === 0) {
        console.clear();
    // Make an AJAX request to a dummy endpoint
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/dummy-endpoint', true);
        xhr.send();
      }
// Record the end time after the loop finishes
      if (i === max - 1) {
	  console.clear()
        const endTime = new Date().getTime();
        const totalTimeInSeconds = (endTime - startTime) / 60000;
        console.log(`Total time: ${totalTimeInSeconds} minutes`);
      }
    }, k*1000 * i);
  }
}
