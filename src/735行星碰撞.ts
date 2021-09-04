function asteroidCollision(asteroids: number[]): number[] {
  const stack = []
  for (let i = 0; i < asteroids.length; i++) {
     if (stack.length) {
       if (asteroids[i] < 0 && stack[stack.length - 1] > 0) {
         if (-asteroids[i] > stack[stack.length - 1]) {
           stack.pop()
           i--
         } else if (-asteroids[i] === stack[stack.length - 1]) {
           stack.pop()
         }
         continue
       }
     } 
     stack.push(asteroids[i])
   }
   return stack
}