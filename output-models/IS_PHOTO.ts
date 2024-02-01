import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_PHOTOAttributes {
    FKSTRID?: string;
    DTINSERT?: Date;
    STR_TITLE?: string;
    REF_PROFILE_GUID?: string;
    L_PHOTO?: number;
    L_ORDER?: number;
    LUSERID?: number;
    TXT_SUBJECT?: string;
    LID: number;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "IS_PHOTO",
	timestamps: false 
})
export class IS_PHOTO extends Model<IS_PHOTOAttributes, IS_PHOTOAttributes> implements IS_PHOTOAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PROFILE_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_PHOTO?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_SUBJECT?: string;

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
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}