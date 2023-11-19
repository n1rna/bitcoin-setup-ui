export const SWIMLANES_MARGIN = 10;
export const SWIMLANES_WIDTH = 300;
export const SWIMLANES_WIDTH_COLLAPSED = 100;
export const SWIMLANES_HEIGHT = 600;

export const DEFAULT_NODE_WIDTH = 200;
export const DEFAULT_NODE_HEIGHT = 56;
export const DEFAULT_NODE_MARGIN = 20;

const Swimlanes = [];
const Nodes = [];

const addSwimlaneItem = (label, id, bgColor) => {
  const pX = Swimlanes.length * (SWIMLANES_WIDTH + SWIMLANES_MARGIN);
  const swimlane = {
    id,
    data: { label, bgColor: bgColor },
    position: { x: pX, y: 0 },
    className: "light",
    style: { width: SWIMLANES_WIDTH, height: SWIMLANES_HEIGHT },
    type: "swimlaneNode",
    zIndex: 0,
    selectable: false,
  };
  Swimlanes.push(swimlane);
  return swimlane;
};

const defaultNodeProps = {
  type: "actionStepNode",
  extent: "parent",
  expandParent: true,
  style: { width: DEFAULT_NODE_WIDTH, height: DEFAULT_NODE_HEIGHT },
  zIndex: 1,
};

const addActionStepItem = (id, label, x, y, lane, options) => {
  const node = {
    id: id,
    data: { label: label },
    position: { x: x, y: y },
    parentNode: lane.id,
    ...defaultNodeProps,
    ...options,
  };
  Nodes.push(node);
  return node;
};

const addEdge = () => {};

// Swimlanes
const L_buyLane = addSwimlaneItem(
  "Buy/Acquire Bitcoin",
  "buyLane",
  "rgba(221, 110, 66, 0.8)",
);
const L_preparEnvLane = addSwimlaneItem(
  "Prepare your environment",
  "prepareEnvironmentLane",
  "rgba(232, 218, 178, 0.8)",
);
const L_setupWalletLane = addSwimlaneItem(
  "Setup your bitcoin wallet",
  "setupWalletLane",
  "rgba(79, 109, 122, 0.8)",
);
const L_backupLane = addSwimlaneItem(
  "Backup",
  "backup",
  "rgba(192, 214, 223, 0.8)",
);
const L_spendLane = addSwimlaneItem("Spend", "spend", "rgba(234, 234, 234, 0.8)");

export const nodes = [
  // Swimlanes
  ...Swimlanes,

  // -- Nodes
  {
    id: "0-buyBitcoin",
    data: { label: "Buy Bitcoin", description: "The ways to acquire Bitcoin include mining, purchasing, or earning it" },
    position: { x: 50, y: 360 },
    parentNode: L_buyLane.id,
    ...defaultNodeProps,
  },
  {
    id: "0-acquireBitcoin",
    data: { label: "Acquire Bitcoin", description: "You can own Bitcoin by buying from exchanges or through peer-to-peer (P2P) transactions." },
    position: { x: 50, y: 440 },
    parentNode: L_buyLane.id,
    ...defaultNodeProps,
  },
  {
    id: "1-chooseDevice",
    data: { label: "Choose a device", description: "Your preferred method of accessing and using your Bitcoin funds will determine the type of device, operating system, and choice between hardware or software wallets." },
    position: { x: 50, y: 100 },
    parentNode: L_preparEnvLane.id,
    ...defaultNodeProps,
  },
  {
    id: "2-prepareEnvironment",
    data: { label: "Prepare your environment", description: "Ensure that you have a secure location and digital setup for a safe Bitcoin wallet installation, transactions, and other digital activities."  },
    position: { x: 50, y: 180 },
    parentNode: L_preparEnvLane.id,
    ...defaultNodeProps,
  },
  {
    id: "3-installWallet",
    data: { fontSize: 12, label: "Install a software wallet on your device", description: "The first step is to initialize your Bitcoin wallet setup." },
    position: { x: 50, y: 100 },
    parentNode: L_setupWalletLane.id,
    ...defaultNodeProps,
  },
  {
    id: "4-createWallet",
    data: { fontSize: 12, label: "Create a wallet (+ passphrase)", description: "Create keys and ensure their protection." },
    position: { x: 50, y: 180 },
    parentNode: L_setupWalletLane.id,
    ...defaultNodeProps,
  },
  {
    id: "5-reviewSetup",
    data: { label: "Review setup", description: "Make sure your Bitcoin setup is ready and secure for use." },
    position: { x: 50, y: 260 },
    parentNode: L_setupWalletLane.id,
    ...defaultNodeProps,
  },
  {
    id: "6-wallet",
    data: { label: "Bitcoin Wallet", description: "You're all set up for now. Check out the next steps to learn more and take further action." },
    position: { x: 50, y: 400 },
    parentNode: L_setupWalletLane.id,
    ...defaultNodeProps,
  },
  {
    id: "7-backupWallet",
    data: { fontSize: 12, label: "Backup seed words (+ passphrase)", description: "This step is vital in your setup. These words not only safeguard your funds but also provide a failsafe method to recover them using this secret phrase." },
    position: { x: 50, y: 180 },
    parentNode: L_backupLane.id,
    ...defaultNodeProps,
  },
  {
    id: "8-spendBitcoin",
    data: { label: "Spend your bitcoin", description: "You can use your Bitcoin for purchases or investments." },
    position: { x: 50, y: 400 },
    parentNode: L_spendLane.id,
    ...defaultNodeProps,
  },
];

const defaultEdgeProps = {
  animated: true,
  zIndex: 2,
  type: "cEdge",
  selected: true
}

// Edges
export const edges = [
  {
    id: "e1-2",
    source: "1-chooseDevice",
    target: "2-prepareEnvironment",
    sourceHandle: "bottom-source",
    targetHandle: "top-target",
    ...defaultEdgeProps,
  },
  {
    id: "e2-3",
    source: "2-prepareEnvironment",
    target: "3-installWallet",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
  {
    id: "e3-4",
    source: "3-installWallet",
    target: "4-createWallet",
    sourceHandle: "bottom-source",
    targetHandle: "top-target",
    ...defaultEdgeProps,
  },
  {
    id: "e4-5",
    source: "4-createWallet",
    target: "5-reviewSetup",
    sourceHandle: "bottom-source",
    targetHandle: "top-target",
    ...defaultEdgeProps,
  },
  {
    id: "e5-6",
    source: "5-reviewSetup",
    target: "6-wallet",
    sourceHandle: "bottom-source",
    targetHandle: "top-target",
    ...defaultEdgeProps,
  },

  {
    id: "e01-6",
    source: "0-buyBitcoin",
    target: "6-wallet",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
  {
    id: "e02-6",
    source: "0-acquireBitcoin",
    target: "6-wallet",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
  {
    id: "e4-7",
    source: "4-createWallet",
    target: "7-backupWallet",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
  {
    id: "e6-8",
    source: "6-wallet",
    target: "8-spendBitcoin",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
];
