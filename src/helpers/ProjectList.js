import Othello from '../assets/Othello1.png';
import Tetris from '../assets/tetris1.png';
import DoodleJump from '../assets/doodle-jump1.png';
import CampBrown from '../assets/camp-brown1.png';

// returns a list of items with different attributes (name, image, desc)
export const ProjectList = [
    {
        name: "Othello",
        image: Othello,
        description: "Classic Othello game developed completely in Java. Includes 3 different levels of opponent AI players.",
        link: "https://github.com/brown-cs15-2022/othello-jennliao"
    },

    {
        name: "Tetris",
        image: Tetris,
        description: "Tetris game developed completely in Java. Speeds up with each cleared row.",
        link: "https://github.com/brown-cs15-2022/tetris-jennliao"
    },

    {
        name: "Doodle Jump",
        image: DoodleJump,
        description: "Doodle Jump developed completely in Java using JavaFX. Various kinds of platforms.",
        link: "https://github.com/brown-cs15-2022/doodlejump-cjeong22-jennliao"
    },

    {
        name: "Camp Brown",
        image: CampBrown,
        description: "Hand-drawn original short game developed completely in Java. All work done in two days during Hack@Brown.",
        link: "https://github.com/jennliao/HACKATBROWNSLAY"
    }
]