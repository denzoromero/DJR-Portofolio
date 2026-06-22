import { useEffect, useRef } from "react"

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // ⭐ STAR SETUP
    const sizes = [0.5, 1, 1.5, 2]
    const stars = []

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: sizes[Math.floor(Math.random() * sizes.length)],
        alpha: Math.random(),
        speed: Math.random() * 0.02,
        type: Math.random()
      })
    }

    // ☄️ METEORS
    const meteors = []

    function createMeteor() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.3,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 6 + 2,
        angle: Math.PI / 4,
        life: 0
      }
    }

    function updateStars() {
      stars.forEach(star => {
        star.alpha += star.speed

        if (star.alpha <= 0 || star.alpha >= 1) {
          star.speed *= -1
        }
      })
    }

    function drawStars() {
        //Dots
        //   stars.forEach(star => {
        //     ctx.beginPath()
        //     ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        //     ctx.fillStyle = `rgba(255,255,255,${star.alpha})`
        //     ctx.fill()
        //   })

        //Cross
        // stars.forEach(star => {
        //     ctx.strokeStyle = `rgba(255,255,255,${star.alpha})`
        //     ctx.lineWidth = star.radius

        //     ctx.beginPath()
        //     ctx.moveTo(star.x - star.radius * 2, star.y)
        //     ctx.lineTo(star.x + star.radius * 2, star.y)

        //     ctx.moveTo(star.x, star.y - star.radius * 2)
        //     ctx.lineTo(star.x, star.y + star.radius * 2)
        //     ctx.stroke()
        // })

        //Stars
        stars.forEach(star => {
            drawStarShape(ctx, star.x, star.y, star.radius * 2, star.alpha)
        })
    }

    //Stars
    function drawStarShape(ctx, x, y, radius, alpha) {
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${alpha})`

        for (let i = 0; i < 5; i++) {
            const angle = (Math.PI * 2 / 5) * i
            const sx = x + Math.cos(angle) * radius
            const sy = y + Math.sin(angle) * radius
            ctx.lineTo(sx, sy)

            const angle2 = angle + Math.PI / 5
            const sx2 = x + Math.cos(angle2) * (radius / 2)
            const sy2 = y + Math.sin(angle2) * (radius / 2)
            ctx.lineTo(sx2, sy2)
        }

        ctx.closePath()
        ctx.fill()
    }

    function updateMeteors() {
        const seaHeight = canvas.height * 0.30
        const seaStart = canvas.height - seaHeight

        if (meteors.length < 10 && Math.random() < 0.02) {
            meteors.push(createMeteor())
        }

        meteors.forEach((m, i) => {
            m.x += m.speed
            m.y += m.speed
            m.life++

        
        if (m.y > seaStart) {
            meteors.splice(i, 1)
            return
        }

        if (m.life > 80) {
          meteors.splice(i, 1)
        }
      })
    }

    //meteors
    // function drawMeteors() {
    //   meteors.forEach(m => {
    //     const xEnd = m.x - m.length * Math.cos(m.angle)
    //     const yEnd = m.y - m.length * Math.sin(m.angle)

    //     const gradient = ctx.createLinearGradient(m.x, m.y, xEnd, yEnd)
    //     gradient.addColorStop(0, "rgba(255,255,255,1)")
    //     gradient.addColorStop(1, "rgba(255,255,255,0)")

    //     ctx.beginPath()
    //     ctx.moveTo(m.x, m.y)
    //     ctx.lineTo(xEnd, yEnd)
    //     ctx.strokeStyle = gradient
    //     ctx.lineWidth = 2
    //     ctx.stroke()
    //   })
    // }

    //shooting stars
    function drawMeteors() {
        meteors.forEach(m => {
            // draw the shooting star head ⭐
            drawStarShape(ctx, m.x, m.y, 4, 1)

            // optional: keep tail for shooting effect
            const xEnd = m.x - m.length * Math.cos(m.angle)
            const yEnd = m.y - m.length * Math.sin(m.angle)

            const gradient = ctx.createLinearGradient(m.x, m.y, xEnd, yEnd)

            //Tail
            // gradient.addColorStop(0, "rgba(255,220,120,1)")
            gradient.addColorStop(0, "rgba(255,255,255,1)");

            //Star
            // gradient.addColorStop(1, "rgba(255,220,120,0)")
            gradient.addColorStop(1, "rgba(255,255,255,0)");

            ctx.beginPath()
            ctx.moveTo(m.x, m.y)
            ctx.lineTo(xEnd, yEnd)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 2
            ctx.stroke()
        })
    }

    let animationId

    function animate() {
        const seaHeight = canvas.height * 0.30
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        
        ctx.save()
        ctx.beginPath()
        ctx.rect(0, 0, canvas.width, canvas.height - seaHeight)
        ctx.clip()


        updateStars()
        updateMeteors()

        drawStars()
        drawMeteors()

        ctx.restore()

        //requestAnimationFrame(animate)
        animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
        //window.removeEventListener("resize", resizeCanvas)
        cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="inset-0 z-10"
    />
  )
}