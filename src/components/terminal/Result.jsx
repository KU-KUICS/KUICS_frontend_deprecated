import React from 'react';
import styled from 'styled-components';

import getIntro from '../../functions/getIntro';
import getBoardList from '../../functions/getBoardList';

const StyledLabel = styled.div`
    color: lime;
    font-size: 2rem;
`;

const Result = (props) => {
    const input = props.input;
    let result = '';
    switch (input) {
        case '':
        case 'clear':
        case 'cls':
            JSON.parse(getIntro()).introList.forEach((item) => {
                result += `<span style='font-size: 3rem; font-weight: 700;'>${item.title}</span><br><br>`;
                item.content.forEach((content) => {
                    result += `${content}<br>`;
                });
            });
            console.log(result);
            break;
        case 'help':
            result = '<span style="color: yellow;">login</span>:\tshow login link<br><span style="color: yellow;">ls [notice|board]</span>:\tshow article list<br><span style="color: yellow;">find</span>:\tsearch articles';
            break;
        case 'login':
            result = 'Click <span onCLick="location.href=\'http://test.kuics.kro.kr:4000/api/auth/login\'"><span style="color: yellow; text-decoration: underline; text-decoration-color: yellow">here</span></span> to login';
            break;
        case 'ls board':
            result = Promise.resolve(getBoardList());
            break;
        case 'credit':
            result = `
                <span style="color: red">Made by</span><br>
                <table>
                    <tr>
                        <td>PM/Deploy/Frontend/Backend</td>
                        <td>&nbsp<a href="https://github.com/BeLeap">BeLeap</a></td>
                    </tr>
                    <tr>
                        <td>Frontend</td>
                        <td>&nbsp<a href="https://github.com/hyp3rflow">hyperflow</a></td>
                    </tr>
                    <tr>
                        <td>Backend</td>
                        <td>&nbsp<a href="https://github.com/Lanph3re">Lanph3re</a>, <a href="https://github.com/lsjbh45">lsjbh45</a>, <a href="https://github.com/zheedong">zheedong</a></td>
                    </tr>
                </table>
            `
            break;
        default:
            result =  'Command not found!<br>type <span style="color: yellow;">help</span> to see commands list';
    }

    return (
        <StyledLabel dangerouslySetInnerHTML={{__html: result}}></StyledLabel>
    )
}

export default Result;