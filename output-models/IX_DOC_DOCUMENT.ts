import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IX_DOC_DOCUMENTAttributes {
    REF_B4BC67FC?: string;
    DTEDIT?: Date;
    B_INITIALSAVE?: boolean;
    B_DOCUMENT?: boolean;
    STR_FILESIZE?: string;
    TXT_REMARK?: string;
    LUSERID?: number;
    STR_FILENAMEPART?: string;
    STR_VERSION?: string;
    DTINSERT?: Date;
    STR_DOCID?: string;
    L_FILEINFORMATION?: number;
    STR_FILENAME?: string;
    STR_TITLE?: string;
    LUSERIDINSERT?: number;
    L_VERSION?: number;
    B_INITIAL?: boolean;
    B_LATEST?: boolean;
    STR_AUTHOR?: string;
    B_EXAMPLE?: boolean;
    STRID: string;
    STR_DOCFILEEXTENSION?: string;
}

@Table({
	tableName: "IX_DOC_DOCUMENT",
	timestamps: false 
})
export class IX_DOC_DOCUMENT extends Model<IX_DOC_DOCUMENTAttributes, IX_DOC_DOCUMENTAttributes> implements IX_DOC_DOCUMENTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_B4BC67FC?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_INITIALSAVE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DOCUMENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FILESIZE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_REMARK?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FILENAMEPART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VERSION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_DOCID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FILENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_VERSION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_INITIAL?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_LATEST?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AUTHOR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EXAMPLE?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_DOCFILEEXTENSION?: string;

}