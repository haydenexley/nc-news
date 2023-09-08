import { Badge, Card, Chip, Stack, Typography } from "@mui/material";
import {Link} from "react-router-dom"
import {Favorite, Comment} from '@mui/icons-material';

const ArticleCard = ({ article }) => {

  return (
  <Card sx={{p: 2, m: 2}}>
      <Link style={{ color: 'inherit', textDecoration: "none",  }} to={`/articles/${article.article_id}`} >
  <Stack spacing={4} direction="row" sx={{ color: 'action.active', p: 3 }}>
  <Chip sx={{m: 1, p: 2}} label={article.topic}/>
      <Badge badgeContent={article.votes} color="primary" showZero>
        <Favorite color="action" />
      </Badge>
      <Badge badgeContent={article.comment_count} color="primary" showZero>
        <Comment color="action" />
      </Badge>
    </Stack>
    <Typography sx={{m: 1}} variant="h5">{article.title}</Typography>
    <Typography sx={{m: 1}} variant='subtitle1'>by {article.author}</Typography>

  </Link>
  </Card>

  )
};

export default ArticleCard
