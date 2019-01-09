"""empty message

Revision ID: d8e4a378e1bb
Revises: 3710d5a1c018
Create Date: 2019-01-04 09:32:08.383290

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd8e4a378e1bb'
down_revision = '3710d5a1c018'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('uname', table_name='user')
    op.drop_index('upsw', table_name='user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index('upsw', 'user', ['upsw'], unique=True)
    op.create_index('uname', 'user', ['uname'], unique=True)
    # ### end Alembic commands ###
