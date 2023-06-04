import React, { useEffect, useState } from 'react'
import * as S from './style';

const ColorPaletteItem = ({color, selectColor, isSelected}) => {
    return (
        <S.ColorItemStyle isSelected={isSelected} color={color} onClick={() => selectColor()}></S.ColorItemStyle>
    )
}

export default function ColorPicker({palette}) {

    const [showMenu, setShowMenu] = useState(false);

    const [selectedColor, setSelectedColor] = useState();

    useEffect(() => {
        if(!selectedColor)
            setSelectedColor(palette[0]);
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <S.ColorPickerStyle>
        <S.ColorPickerButton color={selectedColor} onClick={() => toggleMenu()}></S.ColorPickerButton>
        {
            showMenu &&
            <S.ColorPickerMenu>
                {palette.map(color => <ColorPaletteItem color={color} isSelected={color == selectedColor} selectColor={() => setSelectedColor(color)} key={color}/>)}
            </S.ColorPickerMenu>
        }

    </S.ColorPickerStyle>
  )
}
