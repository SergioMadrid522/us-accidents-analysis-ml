# How to run the project?

First, create a virtual environment on src folder, you can use this command to do it:

```bash
python -m venv venv
```

if It doesn't work try this command instead

```bash
python3 -m venv venv
```

Now run the follow command to active it:

### Windows (CMD)

```bash
venv\Scripts\activate
```

### Windows (PowerShell)

```bash
.\venv\Scripts\Activate.ps1
```

### MacOs / Linux

```bash
source venv/bin/activate
```

Then install the requirements file

```bash
pip install -r requirements.txt
```

Finally, move to app folder and run the next command to start the server

```bash
uvicorn main:app --reload
```

To deactivate the venv run the next command

```bash
deactivate
```

# Run the Notebooks

Open and execute the files in numerical order (1 -> 2 -> 3).
