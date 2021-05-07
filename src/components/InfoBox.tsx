import React, { ReactElement, Component, MouseEventHandler } from 'react';
import '../css/InfoBox.css';

interface InfoBoxProps {
    children: ReactElement<HTMLElement>,
    title: string,
    subtitle: string,
    onClick?: MouseEventHandler<HTMLDivElement>,
    linkText?: string
}

class InfoBox extends Component<InfoBoxProps> {
    fancifyChild(link=null): React.ReactElement<HTMLElement> {
        console.log(this.props.children);
        // if ((this.props.children as ReactElement<HTMLParagraphElement>).type !== 'p') {
        //     return this.props.children.props.children;
        // }
        const extra = Array.isArray(this.props.children.props.children);
        let text;
        if (extra) {
            text = String(this.props.children.props.children[0]);
        } else {
            text = String(this.props.children.props.children);
        }
        const firstLetter = text[0];
        const firstSentence = text.split('.')[0].substr(1)+'. ';
        return <p className='bodyText'>
        <span className='bodyFirstSentence'>
            <span className='bodyFirstLetter'>{firstLetter}</span>
            {firstSentence}
        </span>
        {text.substr(text.indexOf('.') + 2)}
        {link ? <div><div className='arrowRight'/>link</div> : null}
        {extra ? this.props.children.props.children.slice(1) : null}
        </p>;
    };
    
    render() {
        return (
            <div className='infoBox' onClick={this.props.onClick}>
                <div className='subtitleText'><i>{this.props.subtitle}</i></div>
                <div className='titleText'>{this.props.title.toUpperCase()}</div>
                {this.fancifyChild()}
                {this.props.linkText ?
                    <div className='linkText'><div className='arrowRight'/><u>{this.props.linkText}</u></div> : null
                }
            </div>
        );
    }
}

export default InfoBox;