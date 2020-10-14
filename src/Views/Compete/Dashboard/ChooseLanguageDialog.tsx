import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";
import fakeProgrammingLanguages from "../../../fakeData/programmingLanguages";
import { RootState } from "../../../redux/reducers";

type Props = PropsFromRedux & {
  open: boolean;
  handleClose: () => void;
};

const ChooseLanguageDialog: React.FC<Props> = ({ open, handleClose }) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);

  const history = useHistory();

  const handleLanguageButtonClick = (languageID: string) => {
    history.push(`/compete/${languageID}`);
  };

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog
      PaperProps={{ style: { borderRadius: 16 } }}
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      scroll="body"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title" color="primary">
        Choose Your Weapon
      </DialogTitle>
      <DialogContent>
        <List>
          {fakeProgrammingLanguages.map((lang) => {
            return (
              <ListItem
                button
                onClick={() => handleLanguageButtonClick(lang.id)}
              >
                <ListItemAvatar>
                  <Avatar>
                    <img src={lang.iconUrl} alt={lang.name} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={lang.name} />
              </ListItem>
            );
          })}
        </List>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state: RootState) => {
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {};
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ChooseLanguageDialog);
