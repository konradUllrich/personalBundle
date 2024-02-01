import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_POSTAttributes {
    DTEDIT?: Date;
    LID: number;
    STR_OBJECTID?: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    TXT_USERGUIDSDP?: string;
    TXT_MEDIADATA?: string;
    STR_ART?: string;
    TXT_CONTENT?: string;
    TXT_MESSAGE?: string;
    L_IMAGE?: number;
    L_DOCUMENT?: number;
    REF_CREATOR_ID?: string;
}

@Table({
	tableName: "IS_POST",
	timestamps: false 
})
export class IS_POST extends Model<IS_POSTAttributes, IS_POSTAttributes> implements IS_POSTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_OBJECTID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_USERGUIDSDP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_MEDIADATA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_CONTENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_MESSAGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_IMAGE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_DOCUMENT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_CREATOR_ID?: string;

}