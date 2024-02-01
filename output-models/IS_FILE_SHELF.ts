import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_FILE_SHELFAttributes {
    LID: number;
    DTEDIT?: Date;
    REF_PROFILE_ID?: string;
    LUSERIDINSERT?: number;
    REF_FILE_SHELF_FOLDER_ID?: number;
    LUSERID?: number;
    STR_TITLE?: string;
    REF_PROFILE_EDT_ID?: string;
    L_FILES?: number;
    TXT_NOTE?: string;
    DTINSERT?: Date;
}

@Table({
	tableName: "IS_FILE_SHELF",
	timestamps: false 
})
export class IS_FILE_SHELF extends Model<IS_FILE_SHELFAttributes, IS_FILE_SHELFAttributes> implements IS_FILE_SHELFAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_FILE_SHELF_FOLDER_ID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PROFILE_EDT_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILES?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_NOTE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}