AFRAME.registerComponent('range_test', {

    init: function(){
            const marker = document.querySelector("a-marker");
            
            var text = document.querySelector("#top");
            const camera = document.querySelector('[camera]');
            const box = document.querySelector('a-box');
            let markerPosition;
            let markerRotation;
            let boxPostion; 
            let update;
            marker.addEventListener("markerFound", function(){
                //let cameraPosition = camera.object3D.position;
                
                //console.log(cameraPosition);
                //console.log(markerRotation._x);
                text.setAttribute("value", "found");

                update = setInterval(() => {
                    //cameraPosition = camera.object3D.position;
                    markerPosition = marker.object3D.position;
                    markerRotation = marker.object3D.rotation;
                    boxPostion = box.object3D.position;
                    //box.object3D.position.set(markerPosition);
                    // box.object3D.setRotationFromEuler(markerRotation);
                    // box.setAttribute("position",{x:markerPosition.x, y:markerPosition.y, z:markerPosition.z});
                    //box.setAttribute("rotation",{x:markerRotation._x, y:markerRotation._y, z:markerRotation._z})
                    // do what you want with the distance:
                    //console.log(distance);
                }, 16);

            })
            marker.addEventListener("markerLost", function(){
                text.setAttribute("value", "lost");
                box.setAttribute("visible", "true");
                box.setAttribute("position", {x:markerPosition.x+boxPostion.x, y:markerPosition.y+boxPostion.y, z:markerPosition.z+boxPostion.z});
                //console.log(box.object3D.position);
                clearInterval(update);

            })


       

    },

    tick: function(){
        console.log(document.querySelector("a-box").object3D.position);
    }
})