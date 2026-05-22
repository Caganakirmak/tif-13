import * as THREE from 'three';
import { Player } from '../types/game';

export const createStadium = (scene: THREE.Scene) => {
  // Pitch/Field
  const pitchGeometry = new THREE.PlaneGeometry(100, 68);
  const pitchMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a5c1a,
    roughness: 0.8,
    metalness: 0.1,
  });
  const pitch = new THREE.Mesh(pitchGeometry, pitchMaterial);
  pitch.rotation.x = -Math.PI / 2;
  pitch.receiveShadow = true;
  scene.add(pitch);

  // Center line
  const lineGeometry = new THREE.BufferGeometry();
  const linePoints = [
    new THREE.Vector3(0, 0.01, -34),
    new THREE.Vector3(0, 0.01, 34),
  ];
  lineGeometry.setFromPoints(linePoints);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
  const centerLine = new THREE.Line(lineGeometry, lineMaterial);
  scene.add(centerLine);

  // Center circle
  const centerCircle = new THREE.BufferGeometry();
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * 9, 0.01, Math.sin(angle) * 9));
  }
  centerCircle.setFromPoints(points);
  const circle = new THREE.Line(centerCircle, lineMaterial);
  scene.add(circle);

  // Goal posts
  const postGeometry = new THREE.CylinderGeometry(0.5, 0.5, 8, 32);
  const postMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });

  // Home team goals
  const homeGoalLeft = new THREE.Mesh(postGeometry, postMaterial);
  homeGoalLeft.position.set(-10, 4, -50);
  scene.add(homeGoalLeft);

  const homeGoalRight = new THREE.Mesh(postGeometry, postMaterial);
  homeGoalRight.position.set(10, 4, -50);
  scene.add(homeGoalRight);

  // Away team goals
  const awayGoalLeft = new THREE.Mesh(postGeometry, postMaterial);
  awayGoalLeft.position.set(-10, 4, 50);
  scene.add(awayGoalLeft);

  const awayGoalRight = new THREE.Mesh(postGeometry, postMaterial);
  awayGoalRight.position.set(10, 4, 50);
  scene.add(awayGoalRight);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(50, 100, 50);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  scene.add(directionalLight);
};

export const createPlayer = (player: Player, teamColor: THREE.Color): THREE.Group => {
  const group = new THREE.Group();

  // Body
  const bodyGeometry = new THREE.CylinderGeometry(1, 0.8, 2, 32);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: teamColor });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  // Head
  const headGeometry = new THREE.SphereGeometry(0.6, 32, 32);
  const headMaterial = new THREE.MeshStandardMaterial({ color: 0xf4a460 });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 1.4;
  head.castShadow = true;
  head.receiveShadow = true;
  group.add(head);

  // Jersey number
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'white';
  ctx.font = 'bold 120px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(player.id, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  const numberMaterial = new THREE.MeshBasicMaterial({ map: texture });
  const numberGeometry = new THREE.PlaneGeometry(0.4, 0.6);
  const number = new THREE.Mesh(numberGeometry, numberMaterial);
  number.position.z = 0.41;
  group.add(number);

  group.position.set(player.x, 1, player.z);
  group.userData = { playerId: player.id };

  return group;
};

export const createBall = (): THREE.Mesh => {
  const geometry = new THREE.SphereGeometry(0.4, 32, 32);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.6,
    metalness: 0.1,
  });
  const ball = new THREE.Mesh(geometry, material);
  ball.castShadow = true;
  ball.receiveShadow = true;
  ball.position.set(0, 0.4, 0);
  return ball;
};
