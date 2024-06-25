import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const Display3D = ({ url }) => {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Escena, cámara y renderizador
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        sceneRef.current = scene;
        rendererRef.current = renderer;

        // Luz
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 1).normalize();
        scene.add(directionalLight);

        const loader = new OBJLoader();
        loader.load(
            url,
            (obj) => {
                scene.add(obj);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
            },
            (err) => {
                console.error('Error al cargar el modelo:', err);
            }
        );

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            scene.remove(...scene.children);
            
            rendererRef.current.dispose();

            sceneRef.current = null;
            rendererRef.current = null;
        };
    }, [url]);

    return <div ref={mountRef}></div>;
};

export default Display3D;
