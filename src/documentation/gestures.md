# Gestures Hammer

## get a reference to an element
```
var stage = document.getElementById('stage');
```

## create a manager for that element
```
var mc = new Hammer.Manager(stage);
```

## create a recognizer
```
var Rotate = new Hammer.Rotate();
```

## add the recognizer
```
mc.add(Rotate);
```

## subscribe to events
```
mc.on('rotate', function(e) {
    // do something cool
});
```