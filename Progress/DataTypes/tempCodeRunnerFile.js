let styles=[];  
styles.push("jazz");
styles.push("blues");
styles.push("Rock-n-Rol");

// “Classics”.

styles[Math.floor(styles.length/2)]="Classics";
console.log(styles.shift());
styles.unshift("Rap, Reggae");
console.log(styles);

