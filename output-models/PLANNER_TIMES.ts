import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PLANNER_TIMESAttributes {
    DT_ENDE?: Date;
    L_ACCEPTED?: number;
    FKID?: string;
    LUSERIDINSERT?: number;
    DT_TIME?: Date;
    FLT_DURATION?: number;
    LUSERID?: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
    B_FIXED?: boolean;
    STRID: string;
}

@Table({
	tableName: "PLANNER_TIMES",
	timestamps: false 
})
export class PLANNER_TIMES extends Model<PLANNER_TIMESAttributes, PLANNER_TIMESAttributes> implements PLANNER_TIMESAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ENDE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ACCEPTED?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_TIME?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_DURATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_FIXED?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}