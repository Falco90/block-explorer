import React, { useState } from "react";

const Blocks = (props) => {
  const { blocks, pollBlocks, stopPollingBlocks } = props;
  const [isPolling, setIsPolling] = useState(false);
  

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!isPolling) {
        pollBlocks();
    } else {
        stopPollingBlocks();
    }
    setIsPolling(!isPolling);
    // const newBlock = JSON.stringify(await getBlock());
    // setBlocks([...blocks, newBlock]);
    // console.log(blocks);
  };

  return (
    <div>
      <h3>Our blocks</h3>
      {/* {blocks.length > 0 ? <p>{blocks}</p> : null} */}
      <button onClick={onSubmit}>
        {isPolling ? "Stop polling" : "Start polling"}
      </button>
    </div>
  );
};

export default Blocks;
