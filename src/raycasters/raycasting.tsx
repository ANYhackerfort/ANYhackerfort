import React, { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Raycaster: React.FC = () => {
    const { camera, scene } = useThree();
    const raycaster = useRef(new THREE.Raycaster());
    const mouse = useRef(new THREE.Vector2());

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (event.button !== 0) return; // Left click only

            // Convert mouse position to normalized device coordinates (-1 to +1)
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;
            mouse.current.x = (clientX / innerWidth) * 2 - 1;
            mouse.current.y = -(clientY / innerHeight) * 2 + 1;

            // Cast the ray only when mouse is clicked
            raycaster.current.setFromCamera(mouse.current, camera);
            const intersects = raycaster.current.intersectObjects(scene.children, true);

            if (intersects.length > 0) {
                const firstHit = intersects[0];
                console.log("Looking at:", firstHit.object.name || "Unnamed Object");
                console.log("Intersection Point:", firstHit.point);

                // Check if the object is a "hollow_circle" and call logPosition()
                if (firstHit.object.userData?.type === "hollow_circle" && firstHit.object.userData?.logPosition) {
                    firstHit.object.userData.logPosition();
                }
            }
        };

        window.addEventListener("mousedown", handleMouseDown);
        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, [camera, scene]);

    return null;
};

export default Raycaster;
