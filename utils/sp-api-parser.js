const partneredParser = (value) => {
  const data = value?.TransportDetails?.PartneredSmallParcelData?.PartneredEstimate;
  return data?.Amount;
};

const partneredLTLParser = (value) => {
  const amount = value?.TransportDetails?.PartneredLtlData?.PartneredEstimate?.Amount;
  return amount;
};

const smallParcelPartneredVoidDate = (value) => {
  const { VoidDeadline } = value.TransportDetails.PartneredSmallParcelData.PartneredEstimate;
  return VoidDeadline;
};

const partneredLtlVoidDate = (value) => {
  const { VoidDeadline } = value.TransportDetails.PartneredLtlData.PartneredEstimate;
  return VoidDeadline;
};

const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)));

export { 
  sleep,
  partneredLtlVoidDate,
  smallParcelPartneredVoidDate,
  partneredLTLParser,
  partneredParser
};
