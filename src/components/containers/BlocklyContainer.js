import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Blockly from "node-blockly/browser";


export class BlocklyContainer extends React.Component {


    updateBlocksFromXml(xml_str) {
        Blockly.getMainWorkspace().clear();

        try {
            Blockly.Xml.appendDomToWorkspace(
                Blockly.Xml.textToDom(xml_str),
                Blockly.getMainWorkspace()
            );
        } catch {}
    }

    componentWillUpdate(prevProps, prevState, snapshot) {
        this.updateBlocksFromXml(prevProps.xmlContent);
    }

    render() {
        return (
            <div
                id="blocklyDiv"
                style={{
                    height: 500,
                    width: 500,
                    // position: 'absolute',
                    // right: 40,
                    border: "1px solid black",
                    display: 'inline-block',
                    // margin: 40
                }}>
            </div>
        );
    }

}