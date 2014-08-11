//doesn't work

var box2d = {
    b2Vec2 : Box2D.Common.Math.b2Vec2,
    b2BodyDef : Box2D.Dynamics.b2BodyDef,
    b2Body : Box2D.Dynamics.b2Body,
    b2FixtureDef : Box2D.Dynamics.b2FixtureDef,
    b2Fixture : Box2D.Dynamics.b2Fixture,
    b2World : Box2D.Dynamics.b2World,
    b2MassData : Box2D.Collision.Shapes.b2MassData,
    b2PolygonShape : Box2D.Collision.Shapes.b2PolygonShape,
    b2CircleShape : Box2D.Collision.Shapes.b2CircleShape,
    b2DebugDraw : Box2D.Dynamics.b2DebugDraw
};

var scale = 30;         //Box2D measures in meters so to get pixels things need to ne divided by 30
var stage;
var world;

function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));

    setupPhysics();

    stage.onMouseDown = function() {
        var fixDef = new box2d.b2FixtureDef();
        fixDef.density = 1;
        fixDef.friction = 0.5;
        fixDef.restitution = 0.5;                       //takes cares of the bounciness of an object
        var bodyDef = new box2d.b2BodyDef();            //type of gravity like static or dynamic
        bodyDef.type = box2d.b2Body.b2_dynamicBody;      //makes static body meaning it won't be affected by things like gravity
        bodyDef.position.x = Math.random()*700 /scale;
        bodyDef.position.y = 0;
        fixDef.shape = new box2d.b2CircleShape(Math.random*100 / scale);
        world.createBody(bodyDef).CreateFixture(fixDef);
    };

    createjs.Ticker.addEventListener(this);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.useRAF = true;
}

function setupPhysics() {
    world = new box2d.b2World(new box2d.b2Vec2(0, 50), true);        //takes in a parameter gravity value

    // create ground
    var fixDef = new box2d.b2FixtureDef();
    fixDef.density = 1;
    fixDef.friction = 0.5;
    var bodyDef = new box2d.b2BodyDef();            //type of gravity like static or dynamic
    bodyDef.type = box2d.b2Body.b2_staticBody;      //makes static body meaning it won't be affected by things like gravity
    bodyDef.position.x = 700/scale;
    bodyDef.position.y = 500/scale;
    fixDef.shape = new box2d.b2PolygonShape();
    fixDef.shape.SetAsBox(500/scale, 25/scale);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    //setup debug draw
    var debugDraw = new box2d.b2DebugDraw();
    debugDraw.SetSprite(stage.canvas.getContext("2D"));
    debugDraw.SetDrawScale(scale);
    debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_jointBit);
    world.SetDebugDraw(debugDraw);
}

function tick(){
    stage.update();
    world.Step(1/60, 10, 10);
    world.DrawDebugData();
    world.ClearForces();
}

init();