import turtle

def drawBar(t, height):
    t.hideturtle()
    if height >= 200:
        t.fillcolor("red")
    elif height > 100 and height < 200:
        t.fillcolor("yellow")
    else:
        t.fillcolor("green")
    t.begin_fill()
    t.left(90)
    t.forward(height)
    t.write('  '+ str(height))
    t.right(90)
    t.forward(40)
    t.right(90)
    t.forward(height)
    t.right(90)
    t.forward(40)
    t.right(180)
    t.forward(40)
    t.penup()
    t.forward(40)
    t.pendown()
    t.end_fill()
    t.speed(10)



data = [48,117,200,240,160,260,220, 25, 122, 112, 57, 225, 67, 72, 300, 101, 100, 99]
maxheight = max(data)
num_bars = len(data)

bar = turtle.Turtle()
bar.pensize(3)

wn = turtle.Screen()
wn.bgcolor("lightcyan")
wn.setworldcoordinates(-15,-25,40*num_bars+50,maxheight+50)


for a in data:
    drawBar(bar, a)

wn.exitonclick()