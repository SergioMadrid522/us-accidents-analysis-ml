# How to run the project?

First, create a virtual environment on src folder, you can use this command to do it:

```
python -m venv venv
```

if It doesn't work try this command instead

```
python3 -m venv venv
```

Now run the follow command to active it:

### Windows (CMD)

```
venv\Scripts\activate
```

### Windows (PowerShell)

```
.\venv\Scripts\Activate.ps1
```

### MacOs / Linux

```
source venv/bin/activate
```

Then install the requirements file

```
pip install -r requirements.txt
```

Finally, move to app folder and run the next command to start the server

```
uvicorn main:app --reload
```

To deactivate the venv run the next command

```
deactivate
```
