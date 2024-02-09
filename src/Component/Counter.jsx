import IconButton from '@mui/material/IconButton';
import Badge from "@mui/material/Badge";
import { useState } from "react";


export default function Counter() {
      let [like, setLike] = useState(0);
    
      let [disLike, setDisLike] = useState(0);
    
      const increamentLike = () => setLike(like + 1);
      const increamentDisLike = () => setDisLike(disLike + 1);
    
      return (
        <div>
          <IconButton aria-label="Like" color="primary" onClick={increamentLike}>
            <Badge badgeContent={like} color="primary">
              👍
            </Badge>
          </IconButton>
          <IconButton
            aria-label="Dislike"
            color="error"
            onClick={increamentDisLike}
          >
            <Badge badgeContent={disLike} color="error">
              👎
            </Badge>
          </IconButton>
        </div>
      );
    }