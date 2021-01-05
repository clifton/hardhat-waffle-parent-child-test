// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.5;

import './Child.sol';

contract Parent {
    function createChild() public returns (Child) {
        return new Child(msg.sender);
    }

    function isValid() public pure returns (bool) {
        return true;
    }
}
