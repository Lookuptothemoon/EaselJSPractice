(function() {

    var b2Vec2 = Box2D.Common.Math.b2Vec2;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2Body = Box2D.Dynamics.b2Body;
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2Fixture = Box2D.Dynamics.b2Fixture;
    var b2World = Box2D.Dynamics.b2World;
    var b2MassData = Box2D.Collision.Shapes.b2MassData;
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
    var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

    window.requestAnimFrame = (function(){
          return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  window.oRequestAnimationFrame      ||
                  window.msRequestAnimationFrame     ||
                  function(/* function */ callback, /* DOMElement */ element){
                    window.setTimeout(callback, 1000 / 60);
                  };
    })();

    //makes a new world
    var world = new b2World( new b2Vec2(0, 10), true);
    var scale = 30;

    //make a ground
    //sets the properties for density, friction, and restitution
    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;       //bounciness

    //positions the object in the world
    var bodyDef = new b2BodyDef;
    bodyDef.type = b2Body.b2_staticBody;

    //centers object --> horizontally
    bodyDef.position.x = boxCanvas.width / 2 / scale;
    bodyDef.position.y = canvas.height / scale;

    //makes a rectangle shape for the ground
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox((600/scale) /2, (10/scale) /2);

    //adds ground to world
    world.CreateBody(bodyDef).CreateFixture(fixDef);
};