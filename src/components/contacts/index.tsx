import { Box, Skeleton, Typography } from "@mui/material";
import { FaPlus, FaUser } from "react-icons/fa";
import { colors } from "../../constants/colors";
import { Contact, useContacts } from "../../hooks/useContacts";
import useTheme from "../../hooks/useTheme";
import AppButton from "../common/AppButton";
import AppLayout from "../layouts/AppLayout";

const Contact = ({ fullName, value }: { fullName: string; value?: string }) => {
  const { isDark } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        cursor: "pointer",
        padding: "20px",
        borderRadius: "10px",
        transition: ".3s ease-in-out",
        "&:hover": {
          transition: ".3s ease-in-out",
          background: !isDark ? colors.purple3 : colors.purple5,
        },
      }}
    >
      <Box
        sx={{
          background: colors.blue6,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaUser />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          component={"h3"}
          sx={{
            fontFamily: "Montserrat",
            color: !isDark ? colors.purple9 : colors.light_8,
            fontSize: "16px",
            fontWeight: "medium",
            marginBottom: "0.5rem",
            lineHeight: "normal",
          }}
        >
          {fullName}
        </Typography>
        <Typography
          component={"p"}
          sx={{
            fontFamily: "Montserrat",
            color: !isDark ? colors.purple9 : colors.light_8,
            fontSize: "14px",
            fontWeight: "regular",
            marginBottom: "0.5rem",
            lineHeight: "normal",
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

const Contacts = () => {
  const { isDark } = useTheme();
  const { contacts, showAddPopup, handleShowPopup, fetching } = useContacts();
  return (
    <AppLayout>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          //   justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "10rem",
          width: "100%",
          position: "relative",
        }}
      >
        {/* <AddContactPopup
          {...{ show: showAddPopup }}
          handleShow={(state) => handleShowPopup(state)}
        /> */}
        <Box
          sx={{
            marginRight: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            width: "100%",
            position: "relative",
          }}
        >
          <Typography
            component={"h1"}
            sx={{
              fontSize: [
                "clamp(36px, 4.5vw, 56px)",
                "clamp(40px, 5vw, 56px)",
                "56px",
              ],
              fontFamily: "Montserrat",
              fontWeight: 900,
              color: isDark ? colors.light_8 : colors.purple9,
              lineHeight: "normal",
            }}
          >
            Contacts
          </Typography>

          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
            <AppButton
              title="Add Contact"
              isLoading={false}
              disabled={false}
              startIcon={<FaPlus />}
              onClick={() => handleShowPopup(true)}
              sx={{
                pointerEvents: "none",
                cursor: "disabled",
                background: isDark ? colors.purple5 : colors.gray9,
                borderRadius: "5px",
                height: "50px",
                width: "100%",
                maxWidth: "150px",
                color: colors.light,
                fontSize: "14px",
                fontFamily: "Montserrat",
                fontWeight: "medium",
                "@media (max-width: 720px)": {
                  height: "50px",
                },
                "&:hover": {
                  background: colors.gray7,
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            background: isDark ? colors.light_6 : colors.red9,
            opacity: 0.1,
          }}
        ></Box>
        {!contacts.length ? (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              paddingTop: "4rem",
            }}
          >
            <Typography
              component={"h2"}
              sx={{
                fontFamily: "Montserrat",
                color: !isDark ? colors.purple9 : colors.light_8,
                fontSize: "16px",
                fontWeight: "medium",
                marginBottom: "0.5rem",
                lineHeight: "normal",
              }}
            >
              Nothing to show here!
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              paddingTop: "4rem",
            }}
          >
            {fetching
              ? [...new Array(12)].map((i) => (
                  <Skeleton
                    key={i}
                    width={200}
                    sx={{
                      background: isDark ? colors.gray7 : colors.gray2,
                      height: "100px",
                    }}
                  />
                ))
              : contacts?.map((contact: Contact, i: number) => (
                  <Contact
                    key={i}
                    {...{
                      fullName: `${contact.firstName} ${contact.lastName}`,
                      value: contact.contactInfos?.length
                        ? contact.contactInfos[0].value
                        : undefined,
                    }}
                  />
                ))}
          </Box>
        )}
      </Box>
    </AppLayout>
  );
};

export default Contacts;
