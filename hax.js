if(confirm("Hax?")){let speed=prompt("Dino speed?", "10");let invincible=confirm("Invincible?");speed=!isNaN(speed) ?  speed : 10;let cmd=`javascript: ${invincible ? 'Runner.instance_.gameOver=()=>{}' : ''};Runner.config.ACCELERATION=${speed} ;Runner.config.SPEED=${speed};Runner.config.MAX_SPEED=${speed}`;window.location.href = cmd;}