import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_USERPLUGINAttributes {
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STR_PLUGINGUID?: string;
    REF_PROFILE_ID?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    LID: number;
}

@Table({
	tableName: "IS_USERPLUGIN",
	timestamps: false 
})
export class IS_USERPLUGIN extends Model<IS_USERPLUGINAttributes, IS_USERPLUGINAttributes> implements IS_USERPLUGINAttributes {

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
    	type: DataType.STRING(255) 
    })
    	STR_PLUGINGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

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

}