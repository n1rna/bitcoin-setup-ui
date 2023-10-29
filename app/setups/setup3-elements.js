export const SWIMLANES_MARGIN = 10;
export const SWIMLANES_WIDTH = 300;
export const SWIMLANES_WIDTH_COLLAPSED = 100;
export const SWIMLANES_HEIGHT = 600;

export const DEFAULT_NODE_WIDTH = 200;
export const DEFAULT_NODE_HEIGHT = 48;
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
const L_preparEnvLane = addSwimlaneItem(
  "Prepare your environment",
  "prepareEnvironmentLane",
  "rgba(232, 218, 178, 0.8)",
);
const L_setupWalletLane = addSwimlaneItem(
  "Setup each party",
  "setupWalletLane",
  "rgba(79, 109, 122, 0.8)",
);
const L_backupLane = addSwimlaneItem(
  "Backup",
  "backup",
  "rgba(192, 214, 223, 0.8)",
);
const L_buyLane = addSwimlaneItem(
  "Buy/Acquire Bitcoin",
  "buyLane",
  "rgba(221, 110, 66, 0.8)",
);
const L_setupMultiSigEnv = addSwimlaneItem(
  "Setup MultiSig Signing Environment",
  "setupMultiSigEnv",
  "rgba(53, 80, 112, 0.8)",
);
const L_spendLane = addSwimlaneItem("Spend", "spend", "rgba(234, 234, 234, 0.8)");

export const nodes = [
  // Swimlanes
  ...Swimlanes,

  // -- Nodes
  {
    id: "0-buyBitcoin",
    data: { label: "Buy Bitcoin" },
    position: { x: 50, y: 120 },
    parentNode: L_buyLane.id,
    ...defaultNodeProps,
  },
  {
    id: "0-acquireBitcoin",
    data: { label: "Acquire Bitcoin" },
    position: { x: 50, y: 200 },
    parentNode: L_buyLane.id,
    ...defaultNodeProps,
  },
  {
    id: "1-chooseDevice",
    data: { label: "Choose a device" },
    position: { x: 50, y: 100 },
    parentNode: L_preparEnvLane.id,
    ...defaultNodeProps,
  },
  {
    id: "2-acquireHWW",
    data: { label: "Acquire a hardware wallet(s)" },
    position: { x: 50, y: 180 },
    parentNode: L_preparEnvLane.id,
    ...defaultNodeProps,
  },
  {
    id: "3-prepareEnvironment",
    data: { label: "Prepare your environment" },
    position: { x: 50, y: 260 },
    parentNode: L_preparEnvLane.id,
    ...defaultNodeProps,
  },
  {
    id: "4-setupEachParty",
    data: { label: "Setup each party" },
    position: { x: 50, y: 340 },
    parentNode: L_preparEnvLane.id,
    ...defaultNodeProps,
  },
  {
    id: "51-createWallet1",
    data: { label: "Create a wallet 1 (+ passphrase)" },
    position: { x: 50, y: 260 },
    parentNode: L_setupWalletLane.id,
    ...defaultNodeProps,
  },
  {
    id: "52-createWallet2",
    data: { label: "Create a wallet 2 (+ passphrase)" },
    position: { x: 50, y: 340 },
    parentNode: L_setupWalletLane.id,
    ...defaultNodeProps,
  },
  {
    id: "53-createWallet3",
    data: { label: "Create a wallet 3 (+ passphrase)" },
    position: { x: 50, y: 420 },
    parentNode: L_setupWalletLane.id,
    ...defaultNodeProps,
  },

  {
    id: "81-backupWallet1",
    data: { label: "Backup seed words 1 (+ passphrase)" },
    position: { x: 50, y: 260 },
    parentNode: L_backupLane.id,
    ...defaultNodeProps,
  },
  {
    id: "82-backupWallet2",
    data: { label: "Backup seed words 2 (+ passphrase)" },
    position: { x: 50, y: 340 },
    parentNode: L_backupLane.id,
    ...defaultNodeProps,
  },
  {
    id: "83-backupWallet3",
    data: { label: "Backup seed words 3 (+ passphrase)" },
    position: { x: 50, y: 420 },
    parentNode: L_backupLane.id,
    ...defaultNodeProps,
  },

  {
    id: "6-wallet",
    data: { label: "Bitcoin Wallet" },
    position: { x: 50, y: 340 },
    parentNode: L_setupMultiSigEnv.id,
    ...defaultNodeProps,
  },
  {
    id: "8-spendBitcoin",
    data: { label: "Spend your bitcoin" },
    position: { x: 50, y: 340 },
    parentNode: L_spendLane.id,
    ...defaultNodeProps,
  },
];

const defaultEdgeProps = {
  animated: true,
  zIndex: 2,
  type: "smoothstep"
}

// Edges
export const edges = [
  {
    id: "e1-2",
    source: "1-chooseDevice",
    target: "2-acquireHWW",
    sourceHandle: "bottom-source",
    targetHandle: "top-target",
    ...defaultEdgeProps,
  },
  {
    id: "e2-3",
    source: "2-acquireHWW",
    target: "3-prepareEnvironment",
    sourceHandle: "bottom-source",
    targetHandle: "top-target",
    ...defaultEdgeProps,
  },
  {
    id: "e3-4",
    source: "3-prepareEnvironment",
    target: "4-setupEachParty",
    sourceHandle: "bottom-source",
    targetHandle: "top-target",
    ...defaultEdgeProps,
  },

  // setup each party
  {
    id: "e4-51",
    source: "4-setupEachParty",
    target: "51-createWallet1",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
  {
    id: "e4-52",
    source: "4-setupEachParty",
    target: "52-createWallet2",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
  {
    id: "e4-53",
    source: "4-setupEachParty",
    target: "53-createWallet3",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },

  // backup each party
  {
    id: "e51-81",
    source: "51-createWallet1",
    target: "81-backupWallet1",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
  {
    id: "e52-82",
    source: "52-createWallet2",
    target: "82-backupWallet2",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
  {
    id: "e53-83",
    source: "53-createWallet3",
    target: "83-backupWallet3",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },

  // conclude to a multi sig wallet
  {
    id: "e81-6",
    source: "81-backupWallet1",
    target: "6-wallet",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
  {
    id: "e82-6",
    source: "82-backupWallet2",
    target: "6-wallet",
    sourceHandle: "right-source",
    targetHandle: "left-target",
    ...defaultEdgeProps,
  },
  {
    id: "e83-6",
    source: "83-backupWallet3",
    target: "6-wallet",
    sourceHandle: "right-source",
    targetHandle: "left-target",
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
    id: "e3-4",
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
    targetHandle: "top-target",
    ...defaultEdgeProps,
  },
  {
    id: "e02-6",
    source: "0-acquireBitcoin",
    target: "6-wallet",
    sourceHandle: "right-source",
    targetHandle: "top-target",
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
