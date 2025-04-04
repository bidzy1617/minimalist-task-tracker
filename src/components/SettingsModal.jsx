import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function SettingsModal({ settings, setSettings }) {
	const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	const handleSwitchConfirmations = (e) => {
		const isChecked = e.target.checked;
		setSettings({
			confirmations: isChecked,
			askForBulkReactivatingConfirmation: isChecked,
      askForReactivatingConfirmation: isChecked,
			askForBulkDeletingConfirmation: isChecked,
			askForDeletingConfirmation: isChecked,
			askForBulkArchivingConfirmation: isChecked,
			askForArchivingConfirmation: isChecked,
			askForBulkUnarchivingConfirmation: isChecked,
			askForUnarchivingConfirmation: isChecked,
			askForEditingConfirmation: isChecked,
		});
	};

	const handleSwitchBulkReactivateChange = (e) => 
		setSettings({ ...settings, askForBulkReactivatingConfirmation: e.target.checked });
	const handleSwitchReactivateChange = (e) => 
		setSettings({ ...settings, askForReactivatingConfirmation: e.target.checked });
	const handleSwitchBulkDeleteChange = (e) => 
		setSettings({ ...settings, askForBulkDeletingConfirmation: e.target.checked });
	const handleSwitchDeleteChange = (e) => 
		setSettings({ ...settings, askForDeletingConfirmation: e.target.checked });
	const handleSwitchBulkArchiveChange = (e) => 
		setSettings({ ...settings, askForBulkArchivingConfirmation: e.target.checked });
	const handleSwitchArchiveChange = (e) => 
		setSettings({ ...settings, askForArchivingConfirmation: e.target.checked });
	const handleSwitchBulkUnarchiveChange = (e) => 
		setSettings({ ...settings, askForBulkUnarchivingConfirmation: e.target.checked });
	const handleSwitchUnarchiveChange = (e) => 
		setSettings({ ...settings, askForUnarchivingConfirmation: e.target.checked });
	const handleSwitchEditingChange = (e) => 
		setSettings({ ...settings, askForEditingConfirmation: e.target.checked });

	useEffect(() => {
    window.localStorage.setItem(
      "my-minimalistic-tracker-settings",
      JSON.stringify(settings)
    );
  }, [settings]);
  return (
		<>
			<Button 
				variant="dark"
				className="rounded-circle position-fixed"
				style={{top:"15px", right:"15px"}}
				onClick={() => handleShow()}
			>
				<FontAwesomeIcon icon={faGear}/>
			</Button>
			<Modal fullscreen="sm-down" show={show} onHide={handleClose}>
				<Modal.Header closeButton>
						<Modal.Title>Settings</Modal.Title>
				</Modal.Header>
				<Modal.Body className="d-flex justify-content-center">
					<Form>
						<span className="d-flex align-items-center">
							<h5 className="m-0 pe-1">Show Confirmations</h5>
							<Form.Check
								type="switch"
								checked={settings.confirmations}
								onChange={handleSwitchConfirmations}
							/>
						</span>
						<hr className="my-1"/>
						<Form.Check
							type="switch"
							label="Show confirmation when reactivating a task"
							checked={settings.askForReactivatingConfirmation}
							onChange={handleSwitchReactivateChange}
						/>
						<Form.Check
							type="switch"
							label="Show confirmation when bulk reactivating tasks"
							checked={settings.askForBulkReactivatingConfirmation}
							onChange={handleSwitchBulkReactivateChange}
						/>
						<Form.Check
							type="switch"
							label="Show confirmation when editing a task"
							checked={settings.askForEditingConfirmation}
							onChange={handleSwitchEditingChange}
						/>
						<Form.Check
							type="switch"
							label="Show confirmation when bulk deleting tasks"
							checked={settings.askForBulkDeletingConfirmation}
							onChange={handleSwitchBulkDeleteChange}
						/>
						<Form.Check
							type="switch"
							label="Show confirmation when deleting a task"
							checked={settings.askForDeletingConfirmation}
							onChange={handleSwitchDeleteChange}
						/>
						<Form.Check
							type="switch"
							label="Show confirmation when bulk archiving tasks"
							checked={settings.askForBulkArchivingConfirmation}
							onChange={handleSwitchBulkArchiveChange}
						/>
						<Form.Check
							type="switch"
							label="Show confirmation when archiving a task"
							checked={settings.askForArchivingConfirmation}
							onChange={handleSwitchArchiveChange}
						/>
						<Form.Check
							type="switch"
							label="Show confirmation when bulk unarchiving tasks"
							checked={settings.askForBulkUnarchivingConfirmation}
							onChange={handleSwitchBulkUnarchiveChange}
						/>
						<Form.Check
							type="switch"
							label="Show confirmation when unarchiving a task"
							checked={settings.askForUnarchivingConfirmation}
							onChange={handleSwitchUnarchiveChange}
						/>
					</Form>
				</Modal.Body>
			</Modal>
		</>
  )
}

export default SettingsModal;