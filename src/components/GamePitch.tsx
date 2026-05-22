import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createStadium, createPlayer, createBall } from '../scenes/stadium';
import { useGameStore } from '../store/gameStore';
import './GamePitch.css';

export const GamePitch: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const gameState = useGameStore((state) => state.gameState);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 80, 60);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Create stadium
    createStadium(scene);

    // Create players
    const homeTeamColor = new THREE.Color(0xff0000);
    const awayTeamColor = new THREE.Color(0x0000ff);

    gameState.homeTeam.players.forEach((player) => {
      const playerMesh = createPlayer(player, homeTeamColor);
      scene.add(playerMesh);
    });

    gameState.awayTeam.players.forEach((player) => {
      const playerMesh = createPlayer(player, awayTeamColor);
      playerMesh.position.z *= -1;
      scene.add(playerMesh);
    });

    // Create ball
    const ball = createBall();
    scene.add(ball);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [gameState.homeTeam.players, gameState.awayTeam.players]);

  return (
    <div className="game-pitch-container">
      <div ref={containerRef} className="three-container" />
      <div className="game-hud">
        <div className="score-board">
          <div className="team home-team">
            <h3>{gameState.homeTeam.name}</h3>
            <div className="score">{gameState.score.home}</div>
          </div>
          <div className="divider">-</div>
          <div className="team away-team">
            <h3>{gameState.awayTeam.name}</h3>
            <div className="score">{gameState.score.away}</div>
          </div>
        </div>
        <div className="game-time">{Math.floor(gameState.gameTime)}'</div>
      </div>
    </div>
  );
};
