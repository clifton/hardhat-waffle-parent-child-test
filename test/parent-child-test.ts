// import { ethers } from 'hardhat';
import { expect, use } from 'chai';
import { deployContract, MockProvider, solidity } from 'ethereum-waffle';
import { getContractAt } from '@nomiclabs/hardhat-ethers/dist/src/helpers';
import hre from 'hardhat';
import { Wallet } from 'ethers';
import { Parent, Child } from '../typechain';
import ParentArtifact from '../artifacts/contracts/Parent.sol/Parent.json';

use(solidity);

describe('Parent <-> Child relationship', (): void => {
  let parent: Parent;
  let parentOwner: Wallet;
  let childOwner: Wallet;

  beforeEach(async () => {
    const provider = new MockProvider();
    [parentOwner, childOwner] = provider.getWallets();
    parent = (await deployContract(parentOwner, ParentArtifact)) as Parent;
  });

  it('is able to create valid child', async () => {
    // get contract address through callStatic
    const childAddress = await parent
      .connect(childOwner)
      .callStatic.createChild();
    expect(childAddress).to.be.properAddress;

    // create the child contract
    await parent.connect(childOwner).createChild();

    // get the contract and check if valid
    const child = (await getContractAt(hre, 'Child', childAddress)) as Child;
    expect(await child.connect(childOwner).isOwner()).to.be.true;
  });
});
