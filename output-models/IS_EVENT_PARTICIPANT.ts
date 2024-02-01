import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_EVENT_PARTICIPANTAttributes {
    DTINSERT?: Date;
    STR_USERGUID?: string;
    B_SHOW_FEEDS_ON_NEWS?: boolean;
    FKSTRID?: string;
    LUSERID?: number;
    DT_LASTVISIT?: Date;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    REF_USERGUID?: string;
    STR_STATUS?: string;
    LID: number;
}

@Table({
	tableName: "IS_EVENT_PARTICIPANT",
	timestamps: false 
})
export class IS_EVENT_PARTICIPANT extends Model<IS_EVENT_PARTICIPANTAttributes, IS_EVENT_PARTICIPANTAttributes> implements IS_EVENT_PARTICIPANTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_USERGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHOW_FEEDS_ON_NEWS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_LASTVISIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_USERGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

}