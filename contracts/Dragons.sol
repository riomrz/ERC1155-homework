// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

// import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Dragons is ERC1155Supply, Ownable {

    uint256 public constant Dragon = 1;
    uint256 public constant Ball1 = 2;
    uint256 public constant Ball2 = 3;
    uint256 public constant Ball3 = 4;

    mapping (uint256 => string) private _uris;

    constructor() ERC1155("ipfs://QmWkJixmo6yiGWWX8w5Y6oKRhyLg4eQPLe3PTahSaCr7LY/{id}.json") { 
        _mint(msg.sender, Dragon, 1, "");
        _mint(msg.sender, Ball1, 5, "");
        _mint(msg.sender, Ball2, 20, "");
        _mint(msg.sender, Ball3, 9, "");
    }

    function mint(address to, uint256 id, uint256 amount, bytes memory data) external onlyOwner {
        _mint(to, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) external onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    function setTokenUri(uint256 tokenId, string memory tokenUri) external onlyOwner {
        require(bytes(_uris[tokenId]).length == 0, "Cannot set uri twice");
        _uris[tokenId] = tokenUri;
    }
    
    function getTokenUri(uint256 tokenId) external view returns (string memory) {
        return(_uris[tokenId]);
    }
}
