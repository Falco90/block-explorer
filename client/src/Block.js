import React from 'react';

const Block = (props) => {
    const { block } = props;

    return (
        <div>
            {block.hash}
        </div>
    )
}

export default Block;